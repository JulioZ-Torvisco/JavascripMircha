
const d = document;
let x = 0, y = 0;

export function eventoTeclado(e, ball, stage) {

  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitBall = $ball.getBoundingClientRect(),
    $limitStage = $stage.getBoundingClientRect();

  console.log($limitBall, $limitStage);

  switch (e.keyCode) {
    case 37:
      if ($limitBall.left > $limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if($limitBall.top > $limitStage.top){
        e.preventDefault();
        y--;        
      }
      break;
    case 39:
      if ($limitBall.right < $limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if($limitBall.bottom < $limitStage.bottom){
        e.preventDefault();
        y++;
      }
      break;
    default:
      return;
  }
  $ball.style.transform = `translate(${x * 8}px, ${y * 8}px)`;

  $stage
}

export function atajosTeclado(e) {
  if (e.key === 'a' && e.altKey) {
    alert('Alt');
  }
  if (e.key === 'p' && e.altKey) {
    prompt('Promt');
  }
  if (e.key === 'c' && e.altKey) {
    confirm('Confirm');
  }
}
