const footFunctionality = require('./functionality/foot');
const template = require('../../template');

module.exports = (fb, sender, data, res) => {
  const commande = data.payload.split('_');
  const type = commande[0];
  const action = commande[1];
  const league = footFunctionality.retrieveLeague(commande[2]);
  const id = commande[3];

  if(type === 'start') {
    fb.sendText(sender, template.welcomeMessage);
  }
  if (type === 'foot') {
     if (action === 'getNews') footFunctionality.trigger(fb, sender);
     if (action === 'help') fb.sendText(sender, template.helpMessage);
     if (action === 'result') {
      footFunctionality.matchResult(fb, sender, league, id);
     }
  }
  res.sendStatus(200);
}