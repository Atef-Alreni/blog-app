function Newsletter() {
  return (
    <div className='call-to-action-container'>
      <h1>Like what you see?</h1>
      <form action='/register' method='get' className='redirect-form'>
        <input
          type='email'
          className='call-to-action-email'
          placeholder='Email'
        />
        <input
          type='submit'
          value='Sign up for free'
          className='redirect-button'
        />
      </form>
    </div>
  );
}

export default Newsletter;
