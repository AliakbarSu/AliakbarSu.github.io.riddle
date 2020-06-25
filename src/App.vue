<template>
  <div id="app">
    <div class="content">
      <div v-if="!started" class="start">
        <div class="start__wrapper">
          <p class="info">This is not an easy riddle! so read the questions carefully to get them right</p>
          <button class="start-btn" @click="start">Start</button>
        </div>
      </div>

      <div class="promise" v-if="isCompleted && won"> 
        <h1 class="promise__heading"><span class="promise__icon">❤️</span>His promise to you, dear sweetheart Faith ...</h1>
        <p class="promise__text"><span class="promise__icon">❤️</span>He’ll always love you and keep you happy.</p>
        <p class="promise__text"><span class="promise__icon">❤️</span>His life begins that moment when your lips touches his. Now he promises to you, 'my dear sweetheart, that no matter where life takes us, I’ll be by your side, loving you.'</p>
        <p class="promise__text"><span class="promise__icon">❤️</span>He will always be yours, even when you don’t want him.</p>
        <p class="promise__text"><span class="promise__icon">❤️</span>You may fight at times, but he will always love, no matter how hard you fight, or what you fight about.</p>
        <p class="promise__text"><span class="promise__icon">❤️</span>There could be no other life for him than being with you. He pledges to you his undying love and unwavering loyalty.</p>
        <p class="promise__text"><span class="promise__icon">❤️</span>He promises to love, cherish and support you until the day he takes his last breath.</p>
        <p class="promise__text"><span class="promise__icon">❤️</span>He can’t promise you the stars or the moon, but He promises to love you forever and ever.</p>
        <p class="promise__footer">from your true lover Ali</p>
      </div>
      <h1 class="thankyou" v-if="isCompleted && !won">Thank you! the riddle is completed</h1>
      <p v-if="!isCompleted && started" class="hint"><span>Hint: </span>The correct answer is the one your heart says not your rational mind</p>
      <div v-if="!isCompleted && started" class="question">
        <div class="question__container" :class="{'animationStart': currentQuestion.isRomance}">
          <p class="question__text" :class="{'question__text--large': currentQuestion.isLarge}" v-if="currentQuestion.text">{{currentQuestion.text}}</p>
        </div>
      </div>
      <ul v-if="!isCompleted && started" class="options">
        <li v-for="op in currentQuestion.options" :key="op.id" @click="select(op)" class="options__items" :class="{'active': isActive(op.id)}">{{op.text}}</li>
      </ul>
      <div v-if="!isCompleted && started" class="question__actions">
        <button class="question__btn" @click="next(currentQuestion.id)">Next</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      questions: [
        {
          id: "QuestionOne",
          text: "What has to be broken before you can use it?",
          options: [
            {
              id: "optionOne",
              text: "A jewelry",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "An egg",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "An apple",
              isCorrect: true
            },
            {
              id: "optionFour",
              text: "A water bottle",
              isCorrect: true
            }
          ],
        },
        {
          id: "QuestionTwo",
          text: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
          options: [
            {
              id: "optionTwo",
              text: "A person",
              isCorrect: true
            },
            {
              id: "optionOne",
              text: "A candle",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "A car",
              isCorrect: true
            },
            {
              id: "optionFour",
              text: "A tree",
              isCorrect: true
            }
          ],
        },
        {
          id: "QuestionThree",
          text: "What month of the year has 28 days?",
          start: true,
          options: [
            {
              id: "optionOne",
              text: "August",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "January",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "March",
              isCorrect: true
            },
            {
              id: "optionFour",
              text: "All of them",
              isCorrect: true
            },
          ],
        },
        {
          id: "QuestionFour",
          text: "What can you break, even if you never pick it up or touch it?",
          isRomance: true,
          options: [
            {
              id: "optionTwo",
              text: "A glass",
              isCorrect: true
            },
            {
              id: "optionOne",
              text: "A promise",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "A phone",
              isCorrect: true
            },
            {
              id: "optionFour",
              text: "A bone",
              isCorrect: true
            }
          ],
        },
        {
          id: "QuestionFive",
          text: "What would you say if someone said 'I love you'?",
          isRomance: true,
          isLarge: true,
          options: [
            {
              id: "optionOne",
              text: "I love you too",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "I don't know",
              isCorrect: false
            },
            {
              id: "optionThree",
              text: "I am not ready",
              isCorrect: false
            }
          ],
        },
        {
          id: "QuestionSix",
          text: "What if that person was Ali saying that?",
          isRomance: true,
          isLarge: true,
          options: [
            {
              id: "optionOne",
              text: "I love him too",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "Something else",
              isCorrect: false
            }
          ],
        }
      ],
      currentQuestion: {},
      selectedOption: {},
      isCompleted: false,
      audio: null,
      started: false,
      won: false
    }
  },
  components: {
  },
  methods: {
    start() {
      this.started = true
      this.currentQuestion = this.questions[0]
      this.playRiddle()
    },
    playRiddle() {
      if(this.audio) {
        this.audio.pause()
      }
      this.audio = new Audio(require('./assets/sounds/kahoot.mp3'))
      this.audio.play()
    },
    playRomantic() {
      if(this.audio) {
        this.audio.pause()
      }
      this.audio = new Audio(require('./assets/sounds/you_are_the_reason.mp3'))
      this.audio.play()
    },
    isActive(id) {
      return this.selectedOption.id === id
    },
    next(id) {
      if(!this.selectedOption.id) {
        this.$swal('No Option Selected', 'please select on option first', 'OK');
        return;
      }
      const index = this.questions.findIndex(q => q.id == id)
      if(index == this.questions.length - 1) {
        this.process().then(({value}) => {
          if(value) {
            this.$swal({
              title: 'May he give you a big hug?',
              text: "🤗🤗🤗🤗🤗",
              confirmButtonText: 'Yes he may'
            }).then(() => {
              this.won = true
              this.isCompleted = true
            })
          }else {
            this.isCompleted = true
          }
        })
      }else {
        this.process().then(({value}) => {
          if(value) {
            this.currentQuestion = this.questions[index + 1]
          }
        })
        
      }

      if(this.currentQuestion.start) {
        this.playRomantic()
      }

      this.selectedOption = {}
    },
    select(option) {
      this.selectedOption = option
    },
    process() {
      const correctOp = this.currentQuestion.options.find(op => op.id == this.selectedOption.id) || {}
      const index = this.questions.findIndex(q => q.id == this.currentQuestion.id)
      
      if(!correctOp.isCorrect && index !== this.questions.length - 1) {
        return this.$swal({
          title: 'Are you sure?',
          text: "You may break someones' heart",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: "Yes I'm sure",
          cancelButtonText: 'No, changed my mind',
          showCloseButton: true,
          showLoaderOnConfirm: true
        })
      }else if(!correctOp.isCorrect && index == this.questions.length - 1) {
        return Promise.resolve({value: false})  
      }
      return Promise.resolve({value: true})
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  padding-top: 20px;
}

.content {
  width: 100%;
  padding: 5px;
}

.promise {
  font-family: 'Pangolin';
}

.promise__text {
}

.promise__icon {
  margin-right: 5px;
}

.promise__footer {
  font-style: italic;
  font-size: 10px;
}

.hint {
  padding: 12px;
  font-size: 0.8em;
  color: #6b6b6b;
}

.hint > span {
  font-size: 1.2em;
  color: black;
}


.options {
  padding: 0;
  margin: 0;
  padding-top: 5%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}


.options__items {
  padding: 20px;
  background: #f5f4f4;
  border-radius: 5px;
  width: 172px;
  margin-top: 10px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  cursor: pointer;
}

.options__items:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.active {
  background: #5fad5f;
  color: white;
}

.question__actions {
  padding-top: 10%;
  text-align: center;
}

.question__btn {
  border: 1px solid #9191ff;
  border-radius: 5px;
  color: white;
  text-align: center;
  padding: 12px;
  width: 100%;
  margin: auto;
  background: #9191ff;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  font-size: 1.2em;
}

.question__btn:active {
  outline: none;
}

.question__btn:hover {
  background: white;
  color: #9191ff;
}

.question__container {
  width: 100%;
  padding: 10% 12px;
  border-radius: 5px;
  background: #fdd253;
  color: white;
}

.question__text {
  font-size: 13px;
  text-align: center;
}

.question__text--large {
  font-family: 'Pangolin';
  animation-name: changeText;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}

@keyframes changeText {
  from {
    font-size: 13px;
  }
  to {
    font-size: 20px;
  }
}

.thankyou {
  text-align: center;
  margin-top: 50%;
}

.start {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start__wrapper {
  text-align: center;
}

.start-btn {
  border: 1px solid #4fd64e;
  padding: 18px;
  width: 60%;
  background: #4fd64f;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: auto;
}

.start-btn:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


.animationStart {
  background-color: #f95d37;
  transition: 4s;
}



.swal-text, .swal-button {
  font-family: 'Lato', sans-serif !important;
}

.info {
  font-size: 21px;
  text-align: center;
  padding: 12px;
}






</style>
