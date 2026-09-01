function createZenviewCctvServiceForm() {
  const form = FormApp.create('ZENVIEW CCTV - Service & Installation Request');
  form.setDescription('Please provide your details for CCTV installation, servicing, repair or maintenance. ZENVIEW CCTV will contact you using the phone number provided.');

  form.addTextItem().setTitle('Customer Name').setRequired(true);
  form.addTextItem().setTitle('Contact Number').setRequired(true);
  form.addTextItem().setTitle('House No.').setRequired(true);
  form.addTextItem().setTitle('Area').setRequired(true);
  form.addTextItem().setTitle('District').setRequired(true);
  form.addTextItem().setTitle('State').setRequired(true);
  form.addTextItem().setTitle('PIN Code').setRequired(false);
  form.addParagraphTextItem().setTitle('Full Address').setRequired(true);
  form.addListItem()
      .setTitle('What do you want?')
      .setChoiceValues([
        'CCTV Installation',
        'CCTV Servicing',
        'CCTV Repair',
        'CCTV Maintenance',
        'Camera Replacement',
        'Mobile Viewing Setup',
        'Other'
      ])
      .setRequired(true);
  form.addParagraphTextItem().setTitle('Additional Details').setRequired(false);

  Logger.log('EDIT URL: ' + form.getEditUrl());
  Logger.log('CUSTOMER FORM URL: ' + form.getPublishedUrl());
}
