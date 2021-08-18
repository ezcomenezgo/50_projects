/*
 * @Author: your name
 * @Date: 2021-08-13 10:41:55
 * @LastEditTime: 2021-08-13 10:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /_project_starter/script.js
 */

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.addEventListener('click', function () {
    stopSongs()

    document.getElementById(sound).play()
  })

  btn.innerText = sound
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.timeupdate = 0
  })
}