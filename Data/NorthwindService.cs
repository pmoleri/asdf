using System.Net.Http.Json;

namespace TravelApp1.Northwind
{
    public class NorthwindService
    {
        private readonly HttpClient http;

        public NorthwindService(HttpClient http)
        {
            this.http = http;
        }

        public async Task<ProductsType[]?> GetProducts()
        {
            return await http.GetFromJsonAsync<ProductsType[]?>("static-data/northwind-products.json");
        }
    }
}