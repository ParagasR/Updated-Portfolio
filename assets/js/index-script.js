var homeBtn = $('#home');
var resumeBtn = $('#resume');
var option1Btn = $('#option-1');
var option2Btn = $('#option-2');
var option3Btn = $('#option-3');
var option4Btn = $('#option-4');
var contactBtn = $('#contact');
var project1El = $('#project-1');
var project2El = $('#project-2');
var project3El = $('#project-3');
var project4El = $('#project-4');
var resumeEl = $('#resume-content');
var contactEl = $('#contact-content');
var bioEl = $('#bio');
var contentEl = $('.content')

function hideContent() {
    if(bioEl.css('display') === 'flex') {
        bioEl.removeClass('is-flex')
        bioEl.hide()
    } else if (project1El.css('display') === 'flex') {
        project1El.removeClass('is-flex')
        project1El.hide()
    } else if (project2El.css('display') === 'flex') {
        project2El.removeClass('is-flex')
        project2El.hide()
    } else if (project3El.css('display') === 'flex') {
        project3El.removeClass('is-flex')
        project3El.hide()
    } else if (project4El.css('display') === 'flex') {
        project4El.removeClass('is-flex')
        project4El.hide()
    } else if (resumeEl.css('display') === 'flex') {
        resumeEl.removeClass('is-flex')
        resumeEl.hide()
    } else if (contactEl.css('display') === 'flex') {
        contactEl.removeClass('is-flex')
        contactEl.hide()
    }
}


// event listeners
$('a.page').click((event) => {
    event.preventDefault();
    hideContent();
    if ($(event.target).is(homeBtn)) {
        bioEl.addClass('is-flex')
        bioEl.show();
    } else if ($(event.target).is(option1Btn)) {
        project1El.addClass('is-flex')
    } else if ($(event.target).is(option2Btn)) {
        project2El.addClass('is-flex')
    } else if ($(event.target).is(option3Btn)) {
        project3El.addClass('is-flex')
    } else if ($(event.target).is(option4Btn)) {
        project4El.addClass('is-flex')
    } else if ($(event.target).is(resumeBtn)) {
        resumeEl.addClass('is-flex')
    } else if ($(event.target).is(contactBtn)) {
        contactEl.addClass('is-flex')
    }
})