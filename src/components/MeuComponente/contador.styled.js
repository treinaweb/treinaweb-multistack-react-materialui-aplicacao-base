import { styled, Button } from '@mui/material'


export const MinhaDiv = styled('div')`
    color: ${({ theme, abc }) => theme.palette.secondary.main};

`

// 1 = 8px
// 2 = 16px
// 10 = 80px 
export const MeuBotao = styled(Button)`

    margin-top: ${({ theme }) => theme.spacing(2)} ;

    &.MuiButton-root:hover{
        background-color:blue;
    }
`