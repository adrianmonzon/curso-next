export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-blue-600 rounded"></div>
            <h3 className="text-sm font-medium">Total Revenue</h3>
          </div>
          <p className="text-2xl font-bold mt-2">$45,231</p>
        </div>
        
        <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-orange-600 rounded"></div>
            <h3 className="text-sm font-medium">Pending Invoices</h3>
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        
        <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-green-600 rounded"></div>
            <h3 className="text-sm font-medium">Total Customers</h3>
          </div>
          <p className="text-2xl font-bold mt-2">348</p>
        </div>
        
        <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-red-600 rounded"></div>
            <h3 className="text-sm font-medium">Outstanding</h3>
          </div>
          <p className="text-2xl font-bold mt-2">$5,230</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl bg-gray-50 p-4">
          <h2 className="text-xl font-bold mb-4">Recent Revenue</h2>
          <p className="text-gray-500">Gráfico de ingresos (implementar con datos)</p>
        </div>
        
        <div className="rounded-xl bg-gray-50 p-4">
          <h2 className="text-xl font-bold mb-4">Latest Invoices</h2>
          <p className="text-gray-500">Últimas facturas (implementar con datos)</p>
        </div>
      </div>
    </main>
  );
}
