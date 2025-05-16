import { BlobServiceClient } from '@azure/storage-blob';

const connectionString = process.env.REACT_APP_AZURE_CONNECTION_STRING;
const containerName = process.env.REACT_APP_CONTAINER_NAME;

export const uploadToAzureBlob = async (file) => {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);

    await blockBlobClient.uploadBrowserFile(file);
};