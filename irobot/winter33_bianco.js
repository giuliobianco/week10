            $(document).ready(function() {

                $('body').keydown(function(event) {

                    if (event.which === 87) //w - move forward
                    {
                        sendCommand('145,0,50,0,50');
                        
                    }

                    if (event.which === 65) //a --  left
                    {
                        sendCommand('145,0,50,255,206');
                    }

                    if (event.which === 49) // Play Song 1
                    {
                        sendCommand('140,0,2,55,10,67,15,141,0');
                    }

                    if (event.which === 50) // Play Song 2
                    {
                        sendCommand('140,0,3,60,20,72,15,84,10,141,0');
                    }

                    if (event.which === 51) // Play Song 3
                    {
                        sendCommand('140,0,3,60,20,72,15,84,10,141,0');
                    }
                    if (event.which === 32) //spc bar STOP
                    {
                        sendCommand('145,0,0,0,0');
                    }

                    if (event.which === 80) //p Passive Mode
                    {
                        sendCommand('128');
                    }

                    if (event.which === 70) //f full Mode
                    {
                        sendCommand('132');
                    }

                    if (event.which === 83) //s Safe Mode
                    {
                        sendCommand('131');

                    }

                });

            });