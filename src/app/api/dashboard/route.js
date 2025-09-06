export async function GET(request) {
  const url = new URL(request.url);
  const range = url.searchParams.get('range') || 7;
  // Mock data
  return Response.json({
    stats: {
      purchases: 120,
      redemptions: 80,
      rejected: 5,
      sipRejected: 2,
      newSip: 15,
    },
    aum: { value: '₹1,20,00,000', mom: 2.5 },
    sip: { value: '₹40,00,000', mom: 1.2 },
    clientsData: {
      datasets: [{
        label: 'Clients',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 20 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }],
    },
    sipBusinessData: {
      bar: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'SIP Bar',
          data: [12, 19, 3, 5],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }],
      },
      line: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'SIP Line',
          data: [10, 15, 8, 12],
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false,
        }],
      },
    },
    monthlyMISData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [
        {
          label: 'MIS 1',
          data: [10, 20, 30, 40],
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false,
        },
        {
          label: 'MIS 2',
          data: [20, 10, 40, 30],
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false,
        },
      ],
    },
  });
}
