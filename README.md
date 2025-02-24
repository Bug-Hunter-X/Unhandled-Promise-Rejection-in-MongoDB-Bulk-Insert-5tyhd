# Unhandled Promise Rejection in MongoDB Bulk Insert

This repository demonstrates a common error in MongoDB bulk insert operations: unhandled promise rejections. The provided JavaScript code attempts to insert multiple documents into a MongoDB collection. However, it lacks proper error handling for the `insertMany` operation, making it susceptible to silent failures.

## Bug Description
The code inserts documents in batches, but does not handle potential errors. This might occur due to network connectivity problems, exceeding document size limits, or other MongoDB errors.  The absence of error handling means the application will not alert the user about the failed insertion, making debugging significantly harder.

## Solution
The solution adds comprehensive error handling to catch and report any exceptions during the insert operation.