var navio, mar, marImg, navioAnimation;

function preload(){
  marImg = loadImage("sea.png");
  navioAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,150);
  mar.addImage(marImg);

  navio=createSprite(100,200);
  navio.addAnimation("nadando", navioAnimation);  
  
}

function draw() {
  background("blue");
  //mar.velocityX=3; velocidade fora da função de desenho e arrumar o sinal (o mar tem que andar para a esquerda)
  //mar.scale=0.5; propriedades do sprite ficam no lugar da criação (setup)
  //navio.scale=0.2; propriedades do sprite ficam no lugar da criação (setup)

  if(mar.x<0){
    mar.x=mar.width/2; //ajustar o valor da divisao: porque se você aguardar um pouco o funcionamento,
                      //vai perceber que a imagem vai travar ou vai ficar toda azul. Então vai fazendo testes
                      //com numeros um pouco maiores, como o 3, 4, 5, 6 etc.. Até encontrar um número que fique somente com imagem adicionada em movimento
  }
    
 drawSprites();
}
