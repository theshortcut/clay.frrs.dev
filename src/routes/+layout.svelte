<script lang="ts">
	import '../styles/index.css';
	export const year = new Date().getFullYear();
</script>

<header>
	<h1>Clayton Ferris</h1>
</header>

<div class="nav-and-content">
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>

	<main>
		<slot />
	</main>
</div>

<footer>
	<p>©Copyright {year} by Clayton Ferris. All rights reserved.</p>
</footer>

<style>
	header,
  .nav-and-content,
	footer {
		margin: var(--size-fluid-2) 0;
		max-width: 70rem;
		padding: 0 var(--size-fluid-2);
		width: 100%;
	}

	header {
		& h1 {
			font-size: var(--font-size-fluid-2);
		}
	}

	.nav-and-content {
		display: flex;
		flex: 1;
    flex-direction: column;
	}

	nav {
    & ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;

      & li {
        padding: var(--size-1) var(--size-5);
        & + & {
          border-left: 1px solid var(--blue-4);
        }
      }
    }
	}

	main {
	}
</style>
