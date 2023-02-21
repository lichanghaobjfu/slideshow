// JavaScript code
// const pictures = document.querySelectorAll('#picture-frame img');


const pictures = []
for (let i = 0; i < 114; i++) {
  const img = document.createElement("img");
  img.src = "guts/STX Book for Portfolio" + (i + 1).toString() + ".jpg";
  var src = document.getElementById("picture-frame");
  src.appendChild(img);
  pictures.push(img)
}


console.log("total number of image")
console.log(pictures.length)

const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const progressBarInner = document.querySelector('#progress-bar-inner');

const numPictures = pictures.length;
const numViews = Math.ceil((numPictures - 2) / 2);

let currentPage = 1;
let currentView = 1;

function updateProgressBar() {
  progressBarInner.style.width = ((currentPage - 1) / (numPictures - 1)) * 114 + '%';
}

function updatePictures() {
  for (let i = 0; i < numPictures; i++) {
    pictures[i].style.display = 'none';
  }


  console.log("current page:");
  console.log(currentPage);


  if (currentPage === 1) {
    pictures[0].style.display = 'block';
  } else if (currentPage === numPictures) {
    pictures[numPictures - 1].style.display = 'block';
  } else {
    pictures[currentPage - 1].style.display = 'block';
    pictures[currentPage].style.display = 'block';

    // If current page is odd, move it to the right
    if (currentPage % 2 === 1) {
      pictures[currentPage].style.transform = 'translateX(50%) scaleX(-1)';
    }
    // If current page is even, move it to the left
    else {
      pictures[currentPage - 1].style.transform = 'translateX(-50%)';
    }
  }
}

function updateButtons() {
  prevButton.disabled = (currentPage === 1);
  nextButton.disabled = (currentPage === numPictures);
}

function updateView() {
  if (currentPage === 1 || currentPage === numPictures) {
    currentView = 1;
  } else {
    currentView = Math.ceil((currentPage - 1) / 2);
  }
}

function updatePage() {
  if (currentView === 1) {
    currentPage = 1;
  } else if (currentView === numViews + 1) {
    currentPage = numPictures;
  } else {
    currentPage = (currentView - 1) * 2 + 1;
  }
}

function updateAll() {
  updateProgressBar();
  updatePictures();
  updateButtons();
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    if (currentPage === 2) {
      currentPage -= 1;
    } else {
      currentPage -= 2;
    }
    updateAll();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < numPictures) {
    if (currentPage === 1 ) {
      currentPage += 1;
    } else {
      currentPage += 2;
    }
    updateAll();
  }
});




updateAll();
