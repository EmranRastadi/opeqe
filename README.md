# Chat - چت

- **Connect to Server**

  - `const socket = io.connect('http://ip:7000')`

- **Be On ‘connected’ key to receive confirmation**

  - `socket.on(’connected’, () => console.log(’Connected Succesfully’)`

  - روی کلید اشاره شده به گوش باشید تا تصدیق اتصال را دریافت کنید

  - **to start a chat with someone we need a unique value for both of users
    such as their id’s. this a sample data:**

  ```
      data = {
          thisUserId: '123456789',
          thisUserName: 'ant',
          otherUserId: '987654321',
          otherUserName: 'Alii',
      }
  ```

- to start chat send a ‘join’ emit with mentioned data

  - `socket.emit(’join’, data, joinResponse => console.log(’Server Response’, joinResponse))`

    - if ‘join’ was successful you will receive `true` else `false`

  - **to send message emit the following data with this key =\> ‘message’**

  ```
         data: {
              sender: data.thisUserId // Current User,
              receiver: data.otherUserId // Other User,
              content: 'Your Text',
              type: 'text' // can be 'text', 'image', 'video', 'audio'
         }
  ```

  - `socket.emit(’message’, data, messageResponse => console.log(’Server Response’, messageResponse))`

    - So on you need to Be On, on ‘message’ to receive new messages

  - After the chat you need to leave the room. basically when you want to
    switch chat to another user or anything that could end up the chat with
    current user you need to emit the ‘leave’ key with data as join

    `socket.emit(’leave’, data, leaveResponse => console.log(’Server Response’, leaveResponse ))`



  - **for is typing Feature send an emit with ‘is-typing’ key with following
    data on every keyPress event.**

    - `socket.emit(’is-typing’, { name: ‘ant’ }) `



  - and Be On, on ‘is-typing’

  - socket.on(’is-typing’, (data) =\> console.log(data.name+’ is
    typing...’))
