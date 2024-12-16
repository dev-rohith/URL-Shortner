import Chart from "react-google-charts";


const Maps = ({countryData}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full">
      <h3 className="text-center font-semibold mb-4"></h3>

      {/* COUNTRY MAPS */}
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = countryData[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        data={countryData}
      />
    </div>
  );
};
export default Maps;
