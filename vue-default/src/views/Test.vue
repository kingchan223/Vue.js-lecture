<template>
    <div>
    <table>
      <thead>
        <tr>
          <th>도서번호</th>
          <th>도서이름</th>
          <th>출판사</th>
          <th>저자</th>
          <th>재고량</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(book) in existBooks" :key="book.id">
          <td >{{book.id}}</td>
          <td >{{book.title}}</td>
          <td >{{book.publisher}}</td>
          <td >{{book.author}}</td>
          <td >{{book.stock}}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            books: [
            { id: 1, title: '어떻게 배울 것인가', publisher: '비즈니스북스', author: '존 맥스웰', stock: 2 },
            { id: 2, title: '신경끄기의 기술', publisher: '갤리온', author: '마크 맨슨', stock: 0 },
            { id: 3, title: '부의 미래', publisher: '청림출판', author: '앨빈 토플러', stock: 5 },
            { id: 4, title: '기획자의 습관', publisher: '홍익출판사', author: '최장순', stock: 4 }
          ]
        }
    },
    computed: {
        existBooks(){
            return this.books.filter((b)=>b.stock>0);
        }
    },
    methods: {
    },
}
</script>
<style scoped>
</style>
