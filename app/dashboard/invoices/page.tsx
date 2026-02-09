export default function InvoicesPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      
      <div className="rounded-xl bg-gray-50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">All Invoices</h2>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Create Invoice
          </button>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4">Invoice ID</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">#INV-001</td>
              <td className="py-3 px-4">Acme Corp</td>
              <td className="py-3 px-4">$1,234.50</td>
              <td className="py-3 px-4"><span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">Paid</span></td>
              <td className="py-3 px-4">Feb 1, 2026</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">#INV-002</td>
              <td className="py-3 px-4">Tech Startup</td>
              <td className="py-3 px-4">$2,567.00</td>
              <td className="py-3 px-4"><span className="rounded-full bg-yellow-100 px-2 py-1 text-sm text-yellow-800">Pending</span></td>
              <td className="py-3 px-4">Feb 2, 2026</td>
            </tr>
            <tr>
              <td className="py-3 px-4">#INV-003</td>
              <td className="py-3 px-4">Global Inc</td>
              <td className="py-3 px-4">$890.25</td>
              <td className="py-3 px-4"><span className="rounded-full bg-red-100 px-2 py-1 text-sm text-red-800">Overdue</span></td>
              <td className="py-3 px-4">Jan 28, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
