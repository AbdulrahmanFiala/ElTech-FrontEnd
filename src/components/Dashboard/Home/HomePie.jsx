import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function HomePie({ categoryProducts }) {
  const filteredData = categoryProducts.filter(
    (category) => category.productsCount !== 0
  );

  return (
    <PieChart
      series={[
        {
          // arcLabel: (item) => ${item.label} (${item.value}),
          // arcLabelMinAngle: 45,
          data: filteredData.map((category) => ({
            id: category.id,
            value: category.productsCount,
            label: category.name,
          })),
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 50, additionalRadius: -20, color: "black" },
        },
      ]}
      sx={
        {
          // [& .${pieArcLabelClasses.root}]: {
          //   fill: 'white',
          //   fontWeight: 'bold',
          //   marginTop: '20px', // Increase top margin to create space
          //   marginLeft: '20px',
          //   overflow: 'hidden',
          //   textOverflow: 'ellipsis',
          //   whiteSpace: 'nowrap',
          // },
          // marginTop:'',
          // marginLeft:'20px',
          // width: '300',
          // height: '150',
        }
      }
      // width={700}
      height={300}
      margin={{ right: 350 }}
    />
  );
}
