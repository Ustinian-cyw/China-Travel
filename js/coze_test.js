document.addEventListener('DOMContentLoaded', () => {
    const client = new CozeWebSDK.WebChatClient({
        config: {
            bot_id: '7483545471857295371',
            environment: 'production',
            region: 'cn'
        },
        componentProps: {
            container: '#coze-container',
            launchButton: true,
            launchStyle: {
                position: 'absolute',
                right: '20px',
                bottom: '20px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }
        },
        auth: {
            type: 'token',
            token: 'pat_aF0QdvKrgQoCAaEzdwNpl3uww9IPB3ZtTnfFVRvDbWfPfhB03FRud7yij6kethaL',
            onRefreshToken: () => 'pat_aF0QdvKrgQoCAaEzdwNpl3uww9IPB3ZtTnfFVRvDbWfPfhB03FRud7yij6kethaL'
        },
        // 如果 SDK 支持，可以在这里添加回调函数
        onOpen: () => {
            document.getElementById('guideTip').style.display = 'none';
        }
    });
});