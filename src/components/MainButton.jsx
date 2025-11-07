
function MainButton({onClick}) {
 

  return (
<div onClick={onClick}  className="bg-gradient-to-r from-main-btn to-medium-b rounded-2xl p-3 flex items-center pointer">
       <p className='text-txt text-lg font-ftxt'>
        OI MINHA VIDA
      </p>
      <ion-icon className='text-txt text-3xl ml-2' name="heart-circle-outline"></ion-icon>
</div>
  )}
  export default MainButton;