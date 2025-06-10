function enviarmensagem(plano) {
  const numero = "5512991844391";
  let mensagem = "";

  switch (plano) {
    case 'mensal':
      mensagem = "Olá, gostaria de saber mais informações sobre a Avaliação fisica de teste VO2 max.";
      break;
    case 'quadrimestral':
      mensagem = "Olá, gostaria de saber mais informações sobre a CONSULTORIA ON-LINE.";
      break;
    case 'semestral':
      mensagem = "Olá, gostaria de saber mais sobre a CONSULTORIA SEMI PRESENCIAL.";
      break;
    case 'vermais':
      mensagem = "Olá, gostaria de saber mais sobre a CONSULTORIA PRESENCIAL.";
      break;
  };
  const mensagemcripto = encodeURIComponent(mensagem);
  const link = `https://wa.me/${numero}?text=${mensagemcripto}`;
  window.open(link, '_blank');
};
