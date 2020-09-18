import { configure } from 'mobx'

configure({
	computedRequiresReaction: true,
	observableRequiresReaction: true,
	reactionRequiresObservable: true,
	enforceActions: 'always',
})
