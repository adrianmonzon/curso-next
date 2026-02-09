export default function CustomersPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      
      <div className="rounded-xl bg-gray-50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">All Customers</h2>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Add Customer
          </button>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4">Customer Name</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Total Invoices</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Acme Corp</td>
              <td className="py-3 px-4">contact@acme.com</td>
              <td className="py-3 px-4">5</td>
              <td className="py-3 px-4"><span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">Active</span></td>
              <td className="py-3 px-4">Jan 15, 2025</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Tech Startup</td>
              <td className="py-3 px-4">info@techstartup.com</td>
              <td className="py-3 px-4">12</td>
              <td className="py-3 px-4"><span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">Active</span></td>
              <td className="py-3 px-4">Dec 20, 2024</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Global Inc</td>
              <td className="py-3 px-4">hello@globalinc.com</td>
              <td className="py-3 px-4">8</td>
              <td className="py-3 px-4"><span className="rounded-full bg-gray-100 px-2 py-1 text-sm text-gray-800">Inactive</span></td>
              <td className="py-3 px-4">Nov 10, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
