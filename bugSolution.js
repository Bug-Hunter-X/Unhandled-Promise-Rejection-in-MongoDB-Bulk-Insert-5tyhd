```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    const documents = [
      { name: 'Document 1', value: 1 },
      { name: 'Document 2', value: 2 },
      { name: 'Document 3', value: 3 },
    ];

    for (let i = 0; i < documents.length; i += 100) {
      const batch = documents.slice(i, i + 100);
      try {
        const result = await collection.insertMany(batch);
        console.log(`Inserted ${result.insertedCount} documents`);
      } catch (error) {
        console.error(`Error inserting documents:`, error);
        // Add more robust error handling here, such as retry logic or alerts.
      }
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```