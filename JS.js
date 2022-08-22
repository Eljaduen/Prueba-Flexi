// const myModal = new bootstrap.Modal(document.getElementById('Modal'), options)
const myModal = document.getElementById('mimodal')
const myInput = document.getElementById('modal')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
