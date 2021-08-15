/*
 * @Author: your name
 * @Date: 2021-08-13 10:41:55
 * @LastEditTime: 2021-08-15 14:10:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /_project_starter/script.js
 */

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}