<script lang="ts">
	import { activeTimings } from '../lib/data';
	import AudioPlayer from '../components/AudioPlayer.svelte';

	let textElement;
	let currentStringElement;
	const activeClasses = [
		'mx-4',
		'bg-gradient-to-r',
		'from-amethyst-200',
		'to-amethyst-400',
		'rounded',
		'p-1'
	];

	function updateActive() {
		const time = this.currentTime;
		const elements = textElement.querySelectorAll('p');
		currentStringElement.innerText = '';

		for (let [i, el] of elements.entries()) {
			if (activeTimings[i].min <= time && time <= activeTimings[i].max) {
				activeClasses.map((className) => {
					[...elements].map((otherEl) => otherEl.classList.remove(`${className}`));
					el.classList.add(`${className}`);
				});
				currentStringElement.innerText = el.innerText;
				break;
			} else {
				activeClasses.map((className) => el.classList.remove(`${className}`));
			}
		}
	}
</script>

<div class="m-10">
	<div
		class="m-10 mt-24 flex h-48 min-h-full items-center justify-center rounded border-2 border-black bg-gradient-to-l from-amethyst-400 to-amethyst-700"
	>
		<p class="m-3 text-5xl !text-stone-200" bind:this={currentStringElement} />
	</div>
	<div bind:this={textElement} class="grid w-full grid-cols-4">
		<div>
			<p>Everytime I hear your pathetic mumbling - it makes me sick</p>
			<div class="mt-2" />
			<p>*Pow pow pow*</p>
			<p>That's the occupant just shot civilians</p>
			<p>*Boom boom boom*</p>
			<p>That's the bombs falling on children</p>
			<div class="mt-2" />
			<p>*Pow pow pow*</p>
			<p>That's the occupant just shot civilians</p>
			<p>*Boom boom boom*</p>
			<p>That's the bombs falling on children</p>
			<div class="mt-2" />
			<p>Why, where, when</p>
			<p>Did it happen?</p>
			<p>Dogpigs country, dirty fame</p>
			<p>War for them is a favorite game</p>
			<p>Why, where, when</p>
			<p>Did it happen?</p>
			<p>As long as ruzzia wants to play</p>
			<p>Different countries, everyday</p>
			<div class="mt-2" />
			<p>Why, where, when</p>
			<p>Did it happen?</p>
			<p>Dogpigs country, dirty fame</p>
			<p>War for them is a favorite game</p>
		</div>
		<div>
			<p>Why, where, when</p>
			<p>Did it happen?</p>
			<p>As long as ruzzia wants to play</p>
			<p>Different countries, everyday</p>
			<div class="mt-2" />
			<p>Exile has nothing in common</p>
			<p>With emigration</p>
			<p>They loved communism</p>
			<p>For the blind domination</p>
			<p>You really think you hate commies? Ha-ha</p>
			<p>Alright, whatever</p>
			<p>But you may learn more about it from</p>
			<p>Whom?</p>
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>So you're telling me they won't destroy everything do ya?</p>
			<p>My naive little boy</p>
			<p>Do not google "Chechnya"</p>
			<p>Preparation - land corridors, bridgeheads</p>
			<p>Second army in the world is just some dickheads</p>
		</div>
		<div>
			<p>Doormat-government is not okay?</p>
			<p>Destabilization, occupations - that's the way</p>
			<p>At the first sight it may look like there's a various</p>
			<p>But now, after all, we know all of these scenarios</p>
			<div class="mt-2" />
			<p>Puppet Belarus (huh?) and Armenia</p>
			<p>Attack on Georgia, Moldova, Ichkeria</p>
			<div class="mt-2" />
			<p>Do you think they know their fault?</p>
			<p>Or the people's lives price?</p>
			<p>The only thing they really know</p>
			<p>Is how to terrorize</p>
			<div class="mt-2" />
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>Stepan Pantera</p>
			<div class="mt-2" />
			<p>А зараз у нас участники запрошують до зали</p>
			<div class="mt-2" />
			<p>*Pow pow pow*</p>
			<p>That's the occupant just shot civilians</p>
			<p>*Boom boom boom*</p>
			<p>That's the bombs falling on children</p>
		</div>
		<div>
			<p>*Pow pow pow*</p>
			<p>That's the occupant just shot civilians</p>
			<p>*Boom boom boom*</p>
			<p>That's the bombs falling on children</p>
			<div class="mt-2" />
			<p>How many examples will you need</p>
			<p>You see, it has always been the same</p>
			<p>Rewind, reflect, the world's at stake</p>
			<p>Свої душу й тіло ми покладем</p>
			<div class="mt-2" />
			<p>Кличем орків на обід - зробим типу business lunch</p>
			<p>Буде чим їх пригощати - artillery rocket launch</p>
			<p>Army of Ukraine is on the highest level</p>
			<p>Final boss fight - cut the head of the devil</p>
			<p>Russian boys are beaten</p>
			<p>Operation "Rocky"</p>
			<p>Have you heard about Ukraine?</p>
			<p>Тут війна вже вісім років</p>
			<p>Набіжали свинопси - ну нічого, проженемо</p>
			<p>We don't need a ride, we just need more ammo</p>
		</div>
	</div>
	<div class="mt-5 w-full">
		<AudioPlayer on:playing={updateActive} on:timeupdate={updateActive} src="/song.mp3" />
	</div>
</div>

<style lang="postcss">
	:global(html, body) {
		@apply m-0 h-full overflow-hidden;
	}

	:global(html) {
		@apply bg-white text-black;
	}

	p {
		@apply pr-2 text-xl transition-all ease-in-out;
	}
</style>
