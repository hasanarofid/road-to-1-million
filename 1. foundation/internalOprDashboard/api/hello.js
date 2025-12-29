export default function handler(request, response) {
  response.status(200).json({
    message: 'OpsCenter API is live!',
    timestamp: new Date().toISOString(),
  });
}

