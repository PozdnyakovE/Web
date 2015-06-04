using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RoachFrontend.Models;
using System.Windows;

namespace RoachFrontend.Services
{
    public class UserService : IDisposable
    {
        public SqlConnection conn;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="connectionString">Строка соединения</param>
        public UserService(string connectionString)
        {
            //Соединение с БД
            conn = new SqlConnection(connectionString);
            conn.Open();
        }

        public void Dispose()
        {
            if (conn != null)
            {
                conn.Dispose();
            }
        }

        public IEnumerable<UserModel> GetUsers()
        {
            using (var da = new SqlDataAdapter("SELECT * FROM Bikes.dbo.regis", conn))
            {
                //Объект для записи данных
                var data = new DataTable();
                //Заполняем объект данными
                da.Fill(data);
                //Перебираем все строки в таблице, и для каждой строки создайм соответвующий объект
                foreach (DataRow row in data.Rows)
                {
                    yield return new UserModel
                    {
                        id = (int) row["id"],
                        name = row["name"].ToString(),
                        email = row["email"].ToString(),
                        password = row["password"].ToString()
                    };
                }
            }
        }

        public void RegisterUser(UserModel regis)
        {
            using (var da = new SqlDataAdapter("SELECT * FROM Bikes.dbo.regis", conn))
            {
                da.MissingSchemaAction = MissingSchemaAction.AddWithKey; // Для получения метаинформации из БД
                //Объект, который сгенерирует команды встави и обновления
                var b = new SqlCommandBuilder(da);
                //Объект для записи данных
                var data = new DataTable();
                //Заполняем объект данными
                da.Fill(data);
               //Возможны два сценария:
               //1. Строка уже есть в БД, тогда её нужно обновить
               //2. Строки нет в БД, тогда её нужно создать
                DataRow row = data.Rows.Find(regis.id);//Поищем строку по первичному ключу
                /*if (row != null)
                {
                    
                }*/
                    
                if (row == null) // Строки нет, создадим её
                {
                    row = data.NewRow();
                    row["id"] = regis.id;//Нужно установить первичный ключ
                    row["name"] = null;
                    row["email"] = null;
                    row["password"] = null;
                    data.Rows.Add(row);
                }
                //Установим св-ва
                row["name"] = regis.name;
                row["email"] = regis.email;
                row["password"] = regis.password;
                //Обновим БД
                da.Update(data);
            } 
        }
    }
}