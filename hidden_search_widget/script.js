/*
 * @Author: your name
 * @Date: 2021-08-13 10:41:55
 * @LastEditTime: 2021-08-13 10:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /_project_starter/script.js
 */

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', function () {
  console.log('ok')
  search.classList.toggle('active')
  input.focus()
})