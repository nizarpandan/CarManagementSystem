using System.Threading.Tasks;
using CarManagementSystem.API.Models;

namespace CarManagementSystem.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}