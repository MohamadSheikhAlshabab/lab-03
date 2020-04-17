'use strict';
let keywords = [];
let Animals = [];
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


    // let container = document.getElementById('buttons');

    // let btn1 = document.createElement('button');
    // container.appendChild(btn1);
    // btn1.textContent = "Page 1";
    // btn1.setAttribute('id', 'page1');

    // let btn2 = document.createElement('button');
    // container.appendChild(btn2);
    // btn2.textContent = "Page 2";
    // btn2.setAttribute('id', 'page2');

    Unicorn.prototype.render = function () {

        // let container2 = document.getElementById('select');

        // let option1 = document.createElement('option');
        // container2.appendChild(option1);
        // option1.textContent = this.keyword;
        // option1.setAttribute('id', "this.keyword");

        let $unicornTemplate = $('#photo-template').html();
        let rendered = Mustache.render($unicornTemplate, this);
        $('main').append(rendered);
        // return rendered;
    }

    Unicorn.prototype.filters = function () {
        console.log(this.keyword);
        if (!keywords.includes(this.keyword)) {
            keywords.push(this.keyword);
            $('select').append($('<option></option>').html(this.keyword).attr('id', this.keyword).attr('class', 'dropDown'));
        }
    };


    const jsonFile = (numPage) => {
      

        $.ajax(`data/page-${numPage}.json`, { method: "GET", dataType: "JSON" }).then(data => {
            data.forEach(unicornItem => {
                let unicorn = new Unicorn(unicornItem);
                unicorn.render();
                unicorn.filters();
                Animals.push(unicorn);

                for (let i = 0; i < Animals.length; i++) {
                    $(`section:nth-of-type(${i})`).attr('class', Animals[i].keyword).attr('id', Animals[i].title);
                };
                
            });

        });

    };
            jsonFile(1);
            $("select").on('change', function () {
                $('section').hide();

                let selectedVal = $(this).find(':selected').val();
                $(`.${selectedVal}`).show();
            });

            $('button:nth-of-type(1)').on('click', function () {

                $('section').hide();
                jsonFile(1);
            });

            $('button:nth-of-type(2)').on('click', function () {

                $('section').hide();
                jsonFile(2);

            });
    
});