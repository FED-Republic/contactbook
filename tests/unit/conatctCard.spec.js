import {shallowMount} from '@vue/test-utils'
import ContactCard from '@/components/ContactCard.vue'

describe('ContactCard.vue', () => {
    it('renders props.contactInfo when passed', () => {
        const contactInfo = {
            name: {title: "Ms", first: "Alea", last: "Holsen"},
            picture: {
                large: "https://randomuser.me/api/portraits/women/46.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg"
            }
        }
        const contactName = "Alea"
        const contactSecondName = "Holsen"

        const wrapper = shallowMount(ContactCard, {
            props: {contactInfo}
        })
        expect(wrapper.text()).toMatch(contactName)
        expect(wrapper.text()).toMatch(contactSecondName)
    })
})
