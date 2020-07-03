<script>
  import EmailBtn from '../Components/shared/EmailBtn.svelte'
  let val = 420
  let someString = 'Light one up, Pug style'
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>
<div class="grid">

  <div class="card">
    <figure>
      <EmailBtn email="max@none.com" btnText="Email Max" />
      <img alt="Success Kid" src="/images/successkid.jpg" />
      <figcaption>Have fun with Sapper!</figcaption>

    </figure>
    <!-- prettier-ignore -->
    <template lang="pug">
      +if ('val === 420')
        p.test {someString}
        +else
          p.test blah blah missed out
    </template>
    <!---->
  </div>

  <div class="card">
    <figure>
      <EmailBtn email="none@none.com" />
      <img alt="Success Kid" src="/images/successkid.jpg" />
      <figcaption>
        <p>
          You too can be a
          <strong>cool kid</strong>
          use Svelte
        </p>
      </figcaption>
    </figure>
  </div>
  <div class="card" />
</div>

<style type="text/scss">
  $color: blue;
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  p {
    font-size: large;
    strong {
      color: $color;
    }
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
