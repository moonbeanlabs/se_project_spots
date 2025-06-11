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

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescInput.value = profileDescElement.textContent;
  editProfileModal.classList.add("modal_is-opened");
})

editProfileCloseButton.addEventListener("click", function() {
  editProfileModal.classList.remove("modal_is-opened");
})

newPostButton.addEventListener("click", function() {
  newPostModal.classList.add("modal_is-opened");
})

newPostCloseButton.addEventListener("click", function() {
  newPostModal.classList.remove("modal_is-opened");
})

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescElement.textContent = editProfileDescInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit)

function handleAddCardSubmit (evt) {
  evt.preventDefault();
  console.log(cardLinkInput.value);
  console.log(cardCaptionInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);