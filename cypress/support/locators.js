const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BUTTON_LOGIN: '.btn'
    },
    
    MESSAGE: '.toast-message',

    HOME_PAGE: {
        HOME: '[data-test=menu-home] > .fas',
        SETTINGS: '[data-test=menu-settings] > .fas',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao] > .fas'
    },

    CONTAS: {
        NAME: '[data-test=nome]',
        BOTAO_SALVAR: '.btn',
        BOTAO_EDITAR: ':nth-child(7) > :nth-child(2) > .fa-edit'
    },

    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        INTERESSADO: '[data-test=envolvido]',
        VALOR: '[data-test=valor]',
        BOTAO_SALVAR: '.btn-primary',
        STATUS: '[data-test=status]'
    }
}

export default locators;