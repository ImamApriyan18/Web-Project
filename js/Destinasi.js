const elBtnComment = document.querySelector('#btn-comment');
      const elCommentList = document.querySelector('#comment-list');

      const elCommentSection = document.querySelector('#comment-form-section');
      const elCommentForm = document.querySelector('#comment-form');
      const elInputUsername = document.querySelector('#input-username');
      const elInputComment = document.querySelector('#input-comment');
      const elBtnSubmit = document.querySelector('#btn-submit');
      const elBtnCancel = document.querySelector('#btn-cancel');

      const removeNone = document.querySelector(".col-12")
      const addNone = document.querySelector(".btn")
     
      elBtnComment.addEventListener("click", showComment)
      elBtnCancel.addEventListener("click", cancelComment)
      elBtnSubmit.addEventListener("click", submitComment)

      function showComment(){
            // elCommentSection.removeChild("class", "d-none")
            removeNone.classList.remove("d-none");
            addNone.classList.add("d-none");
      }

      function cancelComment(){
            removeNone.classList.add("d-none");
            addNone.classList.remove("d-none");

            var Username = elInputUsername.value = "";
            var Comment = elInputComment.value = "";
      }
      
      function submitComment(){
        event.preventDefault();

            var Username = elInputUsername.value;
            var Comment = elInputComment.value;
            
            alert("Terima Kasih Sudah Berkomentar : " + Username);

            let li = document.createElement('li')
            elCommentList.appendChild(li).innerHTML = `<li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">${Username}</div>
                ${Comment}
              </div>
            </li>`;
            

            console.log(Username);
            console.log(Comment);
            
            removeNone.classList.add("d-none");
            addNone.classList.remove("d-none");

            var Username = elInputUsername.value = "";
            var Comment = elInputComment.value = "";
            
        }