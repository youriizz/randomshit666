document.addEventListener("DOMContentLoaded", function() {
    const feed = document.querySelector('.feed');

    for (let i = 0; i < 10; i++) {
        const publication = document.createElement('div');
        publication.className = 'publication';
        publication.innerHTML = `
            <div class="content">
                <div class="head1">
                    <div class="photoprofil"></div>
                    <div class="nomcompte">c'est moi</div>
                    <div class="datepoint"></div>
                    <div class="date">${i + 1}d</div>
                    <div class="troispoints">
                        <img src="../i/BB131TEST-1/more.svg" alt="troispoints">
                    </div>
                </div>
                <div class="photo2">
                    <div class="photo"></div>
                </div>
                <div class="boutons3">
                    <div class="like"><img src="../i/BB131TEST-1/like.svg" alt="troispoints"></div>
                    <div class="comment"><img src="../i/BB131TEST-1/comment.svg" alt="troispoints"></div>
                    <div class="share"><img src="../i/BB131TEST-1/send.svg" alt="troispoints"></div>
                    <div class="enregistrer"><img src="../i/BB131TEST-1/save.svg" alt="troispoints"></div>
                </div>
                <div class="likes4">45 likes</div>
                <div class="description5">
                    <div class="nomcompte">c'est moi</div>
                    <div class="description">ca mon gars c'est la description</div>
                </div>
                <div class="seecomments6">View all comments</div>
                <div class="writecomments7">Add a comment...</div>
            </div>`;
        feed.appendChild(publication);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Attach event listeners to each 'add-comment' button
    document.querySelectorAll('.add-comment').forEach((button, index) => {
        button.addEventListener('click', function() {
            var input = document.querySelectorAll('.comment-input')[index];
            var commentText = input.value;
            if (commentText !== "") {
                var galleryItems = document.querySelectorAll('.gallery-item');
                var added = false;
                for (let item of galleryItems) {
                    if (item.querySelector('.comment-display').textContent === "") {
                        item.querySelector('.comment-display').textContent = commentText;
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    alert("All comment slots are full.");
                }
                input.value = ""; // Clear input field after adding
            } else {
                alert("Please enter a comment.");
            }
        });
    });

    // Attach event listeners to each 'next' button
    document.querySelectorAll('.next').forEach((button, index) => {
        button.addEventListener('click', function() {
            changeImage(1, index);
        });
    });

    // Attach event listeners to each 'prev' button
    document.querySelectorAll('.prev').forEach((button, index) => {
        button.addEventListener('click', function() {
            changeImage(-1, index);
        });
    });
});

function changeImage(step, index) {
    var galleries = document.querySelectorAll('.photo');
    var items = galleries[index].querySelectorAll('.gallery-item');
    var currentIndex = 0;
    items.forEach((item, idx) => {
        if (item.classList.contains('visible')) {
            currentIndex = idx;
            item.classList.remove('visible');
        }
    });

    var nextIndex = (currentIndex + step + items.length) % items.length;
    items[nextIndex].classList.add('visible');
}


