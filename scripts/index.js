const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];


// Edit Profile Const
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const profileNameElement = document.querySelector(".profile__name");
const profileDescElement = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescInput = editProfileModal.querySelector("#profile-description-input");

// New Post Const
const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const cardLinkInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");

const cardTemplate = document.querySelector("#card-template")
.content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardImageEl.textContent = data.name;

  cardTitleEl.textContent = data.name;

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescInput.value = profileDescElement.textContent;
  openModal(editProfileModal);
})

editProfileCloseButton.addEventListener("click", function() {
  closeModal(editProfileModal);
})

newPostButton.addEventListener("click", function() {
  openModal(newPostModal);
})

newPostCloseButton.addEventListener("click", function() {
  closeModal(newPostModal);
})

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescElement.textContent = editProfileDescInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit)

function handleAddCardSubmit (evt) {
  evt.preventDefault();
  console.log(cardLinkInput.value);
  console.log(cardCaptionInput.value);
  closeModal(newPostModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
 const cardElement = getCardElement(item);
 cardsList.append(cardElement);

});
