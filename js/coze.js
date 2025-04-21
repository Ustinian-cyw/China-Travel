document.addEventListener('DOMContentLoaded', () => {
		        // 智能体初始化
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
		                    position: 'absolute',  // 改为绝对定位
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
				token: 'pat_jm1GawDHLxpVWSyjWNqMxujtxY1X0sOgYxz7REPUunOK6ouyvFBZjQUA8M9AjlCk',
				onRefreshToken: () => 'pat_jm1GawDHLxpVWSyjWNqMxujtxY1X0sOgYxz7REPUunOK6ouyvFBZjQUA8M9AjlCk'
		                // token: 'pat_aF0QdvKrgQoCAaEzdwNpl3uww9IPB3ZtTnfFVRvDbWfPfhB03FRud7yij6kethaL',
		                // onRefreshToken: () => 'pat_aF0QdvKrgQoCAaEzdwNpl3uww9IPB3ZtTnfFVRvDbWfPfhB03FRud7yij6kethaL'
		            }
		        });
		
		        // 事件处理
		        client.on('open', () => {
		            document.getElementById('guideTip').style.display = 'none';
		        });
		
		        // 自动隐藏逻辑
		        let guideTimer = setTimeout(() => {
		            document.getElementById('guideTip').style.opacity = '0';
		            setTimeout(() => {
		                document.getElementById('guideTip').style.display = 'none';
		            }, 500);
		        }, 5000);
		
		        document.getElementById('guideTip').addEventListener('click', () => {
		            clearTimeout(guideTimer);
		            document.getElementById('guideTip').style.display = 'none';
		        });
		    });
