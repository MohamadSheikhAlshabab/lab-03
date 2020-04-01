'use strict';

$(document).ready(function () {
    function Unicorn(unicorn) {
        this.image_url = unicorn.image_url;
        this.title = unicorn.title;
        this.description = unicorn.description;
        this.keyword = unicorn.keyword;
        this.horns = unicorn.horns;
        Unicorn.all.push(this);
    }
    Unicorn.all = [];


    let container = document.getElementById('buttons');

    let btn1 = document.createElement('button');
    container.appendChild(btn1);
    btn1.textContent = "Page 1";
    btn1.setAttribute('id', 'page1');

    let btn2 = document.createElement('button');
    container.appendChild(btn2);
    btn2.textContent = "Page 2";
    btn2.setAttribute('id', 'page2');

    Unicorn.prototype.render = function () {

        let container2 = document.getElementById('select');

        let option1 = document.createElement('option');
        container2.appendChild(option1);
        option1.textContent = this.keyword;
        option1.setAttribute('id', "this.keyword");

        let $unicornTemplate = $('#unicorn-template').html();
        let rendered = Mustache.render($unicornTemplate, this);
        $('main').append(rendered);
        // return rendered;
    }
    let keywords = [];
    let renderSelect = function () {
        // get the select
        // loop through all the keywords
        // add it to the select Hint (.append()) TODO search for it
    };
    const jsonFile = () => {
        $("#page1").one("click", function () {
            // alert("The paragraph was clicked.");

            $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
                data.forEach(unicornItem => {
                    let unicorn = new Unicorn(unicornItem);
                    unicorn.render();

                });
                renderSelect();
            });


        });
        $("#page2").one("click", function () {
            // alert("The paragraph was clicked.");
            // $('#id').removeAttr('src').replaceWith($image.clone());

            $.ajax("data/page-2.json", { method: "GET", dataType: "JSON" }).then(data => {
                data.forEach(unicornItem => {
                    let unicorn = new Unicorn(unicornItem);
                    unicorn.render();

                });
                renderSelect();
            });


        });

    };
    jsonFile();
    $("select").change(function () {

    })
});



// //0 create array for the keywords  
// renderSelect = function() {
//     // get the select
//     // loop through all the keywords
//     // add it to the select Hint (.append()) TODO search for it
//   };
//   const readJson = () => {
//     $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(
//       data => {
//         data.forEach(hornItem => {
//           let horn = new Horns(hornItem);
//           horn.render();
//           // if its not in the keyword array
//           // added it there
//         });
//         renderSelect();
//       }
//     );
//   };
//   readJson();
//   $("select").change(function() {
//     // 1 get the value ===> keyword hint $(this)
//     // 2 hide the elements and only show the ones with id == keyword
//   });