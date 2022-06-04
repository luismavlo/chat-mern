import { animateScroll } from "react-scroll"



export const scrollToBottom = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 0,
      delay: 0,
      smooth: true,
      offset: 0
    })
  }, 10)
}

export const scrollToBottomAnimated = (id) => {

  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 250,
      delay: 0,
      smooth: true,
      offset: 0
    })
  }, 10)

}