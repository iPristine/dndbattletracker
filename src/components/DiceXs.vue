<template>
	<v-card class="d-flex d-md-none rounded-0 dice flex-wrap">
		<v-card-text class="d-flex">
			<div class="w100">
				<v-select
					v-model="countDicesDefault"
					:items="countDices"
					variant="underlined"
					hide-details
					base-color="#9d0a0e"
					class="ma-2"
					density="compact"
				></v-select>
			</div>
			<div class="w100">
				<v-select
					v-model="diceDefault"
					:items="dices"
					variant="underlined"
					hide-details
					base-color="#9d0a0e"
					class="ma-2"
					density="compact"
				></v-select>
			</div>
		</v-card-text>
		<v-card-actions>
			<v-btn
				color="#9d0a0e"
				variant="text"
				@click="getDice(countDicesDefault, diceDefault)"
			>
				Результат
				<v-dialog v-model="dialog" activator="parent" width="auto">
					<v-card>
						<v-card-text> {{ printDiceResult }} </v-card-text>
					</v-card>
				</v-dialog>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
import shared from '@/components/shared'
export default {
	name: 'DiceXs',
	data() {
		return {
			dialog: false,
			diceDefault: 20,
			countDicesDefault: 1,
			dicesResult: 0,
			dices: [
				{ title: 'd2', value: 2 },
				{ title: 'd3', value: 3 },
				{ title: 'd4', value: 4 },
				{ title: 'd6', value: 6 },
				{ title: 'd8', value: 8 },
				{ title: 'd10', value: 10 },
				{ title: 'd20', value: 20 },
				{ title: 'd100', value: 100 },
			],
			countDices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			dicesMultipleResult: [],
		}
	},
	computed: {
		printDiceResult() {
			if (this.countDicesDefault === 1) return this.dicesResult
			else {
				return (
					this.dicesMultipleResult.join(' + ') +
					' = ' +
					this.dicesMultipleResult.reduce((a, v) => {
						return a + v
					}, 0)
				)
			}
		},
	},
	methods: {
		getDice(countDices, dice) {
			if (countDices === 1) {
				this.dicesResult = shared.dice(countDices, dice)
			} else {
				let arr = []
				for (let i = 0; i < countDices; i++) {
					arr.push(shared.dice(1, dice))
				}
				this.dicesMultipleResult = arr
				return arr
			}
		},
	},
	mounted() {
		this.getDice(1, 20)
	},
}
</script>
<style scoped>
.dice {
	position: fixed;
	z-index: 10000;
	bottom: 50px;
	width: 100%;
}
.w100 {
	width: 100px;
}
</style>
