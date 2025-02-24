```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Create an array of documents
    const documents = [
      { name: 'Document 1', value: 1 },
      { name: 'Document 2', value: 2 },
      { name: 'Document 3', value: 3 },
    ];

    // Insert documents in batches
    for (let i = 0; i < documents.length; i += 100) {
      const batch = documents.slice(i, i + 100);
      await collection.insertMany(batch);
      console.log(`Inserted ${batch.length} documents`);
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```