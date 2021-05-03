const dialogflow = require("dialogflow");
const dialogflowConfig = require("./config");
const projectId = "raj-chatbot-sgrb";
const configuration = {
  credentials: {
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrwcU9bquFfVEd\no6jMAYXrQ/So+WN+lelw4uTJdziiUX3PivT6uzFknToELWYhEPyameTK0+7vOB84\ndokp/FkT3zzbZArUgKqnISBnQI1lSms1Vrp+tq53vFl3IWY4n77kqVrtRoTHqibk\nDQDJS1ZyMPpsGiqtJDSJil63CmRmGkTVsDYrgq7rs0yL1TbowX9zJy4b53uwilyB\nwAfx/QB15wGpDprOV6MEKlTM9H7Gmp0hIx2C5Fk/6qCxyjqMB/1hr3JcQox8nSny\nXdV4cL3lXmUpuzOZfJGcFk2y7TLa6UZmknxL2sbIzJROBJf2outmi5NsolRKPUdT\nb90168nRAgMBAAECggEABpCkgmGdir+sfw6HYCzaupBhZKgLpoYCYz848X5uGr40\nqd8s1/yZubfMxOYbVj44+YvSU/Jf2qLxho35VjKAESNiRxx+0XqNi0/X1jqAbRO4\nH1TOUhOXfZokbUpIhveMK19Ry2n7n0ogrGzWz9riVgELQWCKqw2MOImibyqlhcWB\nJkGia4B+W6bgtwcmTanmHLAKUz2gyA398p4lgUdDiANNzonxYVS2OaDRHbP4V4DI\nekj3yj6GfySGS96ZIkJCvwfmco4la03EeebizmtqnRT5cGash4W2MazTVUrNBPXx\nT15x2HDtJsZviLd70l+rNrBiBM9FLtqMpD9NqTYdQQKBgQDprrNkAcwtPzwA81yt\nbDLzqMlZmw4Alpjz5Ruvs1sKtFj5/rOV5vs/TFHjmMyVjdR/vEV6zaR23EK62TUx\n5INsaL5zzApzBTiap7aIfIqp6XkGlcoudJonnYVi4SrvFApIxl4luoQbjSEdw5jq\n9JggKziN4lBs9ilKRQdQoJB02QKBgQC8KQ23X65YXy6Yw039ZTxNL9TI0wUDkJ2B\nfDyAXTZ4O0lfd7Etpt22XBHM0e/nO1Dl/zzfzJ6/kxKLkSiAcTYuhzva2b1DUhKE\n5sV6bgdJykVhTH7Fw0NTECRIUPqK7enl4nPHm5TYbx3J0IZlYih5B6eRONcq3feh\nNAWiGBaBuQKBgG3Rky6phZmyAPH1bJV3ps5JgS6iJsdx/rmH7yX4JQ33yWTbJOyK\nm4KYzFcohOS3vai2AvT+VY8iXh3PXCdxW64D35Uty69YQcy0ipzD4qqNNTo6BMUm\nORfq+DeK2BF5Gogu6SnT6KfGAE0rkd7BSgi8JxzOwbsjSC5GGHT0sE6pAoGAe60s\nY9zTVyjxEt5E9ArH0SBgZ8Q0Znx22vaTOfiK5gpqFwMwhYZJ8ySfWpafbsjRSuwy\n0hPIQLnmFbDLA2nmqDyhfh9ixM48d/jL0sZhqgH3CpZiOZE4Pm+8uX/ovsrU1BK9\n8XT1KDIZTV7wB9G2Mp9yaAUJgRa3PtFX5oyYtpkCgYAJory39jgfVQUEV47FnrvG\nZ9OSK148U6XSzsA7KdH0M39AS7fVQ26EbP9ZYAYtvxZrIWbwBAr9vv/kvfXjJf0g\nKeMrCv4gWbEyKO5U82SFEgUEh+nijO7tdIF48/lWloJM9I5Zax49Z3F6nrDBucD/\ndpZFjRez01+x+rAVGjJ8JA==\n-----END PRIVATE KEY-----\n",
    client_email: "chatbot-raj@raj-chatbot-sgrb.iam.gserviceaccount.com"
  }
};

const sessionId = "987654";
const languageCode = "en-US";
const sessionClient = new dialogflow.SessionsClient(configuration);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);

async function talkToChatbot(message) {
  console.log("message " + message);
  const botRequest = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode
      }
    }
  };

  const response = await sessionClient
    .detectIntent(botRequest)
    .then((responses) => {
      console.log(JSON.stringify(responses));
      const requiredResponse = responses[0].queryResult;
      return requiredResponse;
    })
    .catch((error) => {
      console.log("ERROR: " + error);
    });

  return response;
}

module.exports = talkToChatbot;