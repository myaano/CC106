const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Routers 
const reportsRouter = require('./routes/reports');
const testItemsRouter = require('./routes/testItems');
const adminRouter = require('./routes/admin');
const reportTypeRouter = require('./routes/reportType');
const statusHistoryRouter = require('./routes/statusHistory');

// Mount routes
app.use('/api/reports', reportsRouter);
app.use('/api/test-items', testItemsRouter);
app.use('/api/admin', adminRouter);
app.use('/api/report-type', reportTypeRouter);
app.use('/api/status-history', statusHistoryRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/mamamo' , (req, res) => {
    res.send('Mama Mo On');
});



