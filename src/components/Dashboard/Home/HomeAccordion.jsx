import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HomeAccordion({ trendingProducts }) {
  if (!Array.isArray(trendingProducts)) {
    return <div>No trending products available</div>;
  }

  return (
    <div>
      {trendingProducts.map((product) => (
        <Accordion key={product.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${product.id}-content`}
            id={`panel-${product.id}-header`}
          >
            <Typography>{product.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Description: {product.description}
            </Typography>
            <Typography>
              Price: {product.price}
            </Typography>
            {/* Include other product details as needed */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}