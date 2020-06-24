<template>
  <div id="app">
    <div class="content">
      <p class="hint"><span>Hint: </span>The correct answer is the one your heart says not your rational mind</p>
      <div class="question">
        <div class="question__container">
          <p class="question__text" v-if="currentQuestion">{{currentQuestion.text}}</p>
        </div>
      </div>
      <ul class="options">
        <li v-for="op in currentQuestion.options" :key="op.id" @click="select(op)" class="options__items" :class="{'active': isActive(op.id)}">{{op.text}}</li>
      </ul>
      <div class="question__actions">
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
              text: "Ann Egg",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "A Banana",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "An Apple",
              isCorrect: true
            }
          ],
        },
        {
          id: "QuestionTwo",
          text: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
          options: [
            {
              id: "optionOne",
              text: "A candle",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "A person",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "A car",
              isCorrect: true
            }
          ],
        },
        {
          id: "QuestionThree",
          text: "What month of the year has 28 days?",
          options: [
            {
              id: "optionOne",
              text: "All of them",
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
            }
          ],
        },
        {
          id: "QuestionFour",
          text: "What can you break, even if you never pick it up or touch it?",
          options: [
            {
              id: "optionOne",
              text: "A promise",
              isCorrect: true
            },
            {
              id: "optionTwo",
              text: "A glass",
              isCorrect: true
            },
            {
              id: "optionThree",
              text: "Your head",
              isCorrect: true
            }
          ],
        },
        {
          id: "QuestionFive",
          text: "What would you say if someone said 'I love you'",
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
          text: "What if that person was Blah",
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
      currentQuestion: null,
      selectedOption: {}
    }
  },
  created() {
    this.currentQuestion = this.questions[0]
  },
  components: {
  },
  methods: {
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
            this.$swal('May he hug you?')
          }else {
            this.$swal('The riddle is completed!')
          }
        })
      }else {
        this.process().then(({value}) => {
          if(value) {
            this.currentQuestion = this.questions[index + 1]
          }
        })
        
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
  font-size: 1.2em;
}




</style>
